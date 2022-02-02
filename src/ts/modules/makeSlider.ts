import SimpleSlider from '../libs/SimpleSlider';

const makeSlider = (): void => {
  const sliderElements = Array.from(document.getElementsByClassName('slider'));
  const sliders = sliderElements.map((sliderElement) => {
    const slider = sliderElement as HTMLElement;

    return new SimpleSlider({
      slider,
      autoPlay: true,
      intervalTime: 2000,
    });
  });
};

export default makeSlider;
