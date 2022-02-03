// 突貫でかいたのでバグってたら教えてください。
// Array.fromを使っているので、IE対応させる場合ポリフィル必要。

type Props = {
  // パラメータの型
  slider: HTMLElement;
  autoPlay?: boolean;
  intervalTime?: number;
};

export default class SimpleSlider {
  // プロパティの型
  slider: HTMLElement;
  sliderBox: HTMLElement | null;
  sliderSlides: HTMLElement | null;
  sliderSlide: HTMLElement[] | null;

  currentSlide: number;
  slideLength: number;

  intervalTime: number;

  isPause: boolean;
  isAutoPlay: boolean;

  constructor(props: Props) {
    // contructor = 初期化時に必ず呼ばれて実行される変数。プロパティの値をセット

    // 要素系
    this.slider = props.slider;
    this.sliderBox = this.slider.querySelector('.slider-box');
    this.sliderSlides = this.slider.querySelector('.slider-slides');
    this.sliderSlide = Array.from(
      this.slider.querySelectorAll<HTMLElement>('.slider-slide'),
    );

    // パラメータ系
    this.intervalTime = props.intervalTime ?? 6000;

    // 状態管理系
    this.isAutoPlay = props.autoPlay ?? true;
    this.isPause = true;
    this.currentSlide = 0;
    this.slideLength = this.sliderSlide.length;

    if (this.isAutoPlay) this.autoPlay();
  }

  play(): void {
    // 再生
    this.ticker();
  }

  autoPlay(): void {
    // 繰り返し再生

    if (this.isPause) return;
    this.isAutoPlay = true;
    this.play();
  }

  pause(): void {
    // 一時停止

    this.isPause = true;
    this.isAutoPlay = false;
  }

  changeCurrentState(): void {
    // 現在のスライドのindex番号を管理するメソッド

    if (this.currentSlide === this.slideLength - 1) {
      this.currentSlide = 0;
    } else {
      this.currentSlide += 1;
    }
  }

  move(): void {
    // 実際に動きを実現してるメソッド。クラスの付け外しのみを行う。
    if (this.sliderSlide) {
      this.sliderSlide.forEach((slide) => {
        if (slide.classList.contains('slider-slide--now')) {
          slide.classList.remove('slider-slide--now');
        }
      });

      this.sliderSlide[this.currentSlide].classList.add('slider-slide--now');
    }
  }

  ticker(): void {
    // 繰り返し処理を行うタイマー的メソッド
    this.changeCurrentState();
    this.move();

    if (this.isAutoPlay)
      window.setTimeout(this.ticker.bind(this), this.intervalTime);
  }
}
