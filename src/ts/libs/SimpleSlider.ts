type Props = {
  slider: HTMLElement;
  autoPlay?: boolean;
  intervalTime?: number;
};

export default class SimpleSlider {
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

    this.play();
  }

  play(): void {
    this.ticker();
  }

  autoPlay(): void {
    if (this.isPause) return;
    this.play();
  }

  pause(): void {
    this.isPause = true;
  }

  changeCurrentState(): void {
    if (this.currentSlide === this.slideLength - 1) {
      this.currentSlide = 0;
    } else {
      this.currentSlide += 1;
    }
  }

  move(): void {
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
    this.changeCurrentState();
    this.move();

    window.setTimeout(this.ticker.bind(this), this.intervalTime);
  }
}
