import makeSlider from './modules/makeSlider';

const domContentLoaded = (): void => {
  console.log('domcontentLoaded!');
};

const loaded = (): void => {
  makeSlider();
};

export { domContentLoaded, loaded };
