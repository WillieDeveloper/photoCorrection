const defaultValues = {
    grayscale: 0,
    contrast: 100,
    brightness: 100,
    sepia: 0,
    saturate: 100
};

const resetButton = document.querySelector('#reset');

const setFilterValue = (data) => {
    const image = document.querySelector('#image');
    for(var key in data) {
        image.style.filter = `${key}(${data[key]}%)`;
    }
};

const getActiveElement = () => {
    let data = {};
    data[document.activeElement.getAttribute('id')] = document.activeElement.value;
    setFilterValue(data);
};

const setDefaults = () => {
    setFilterValue(defaultValues);
    for(var key in defaultValues) {
        let $slider = document.querySelector(`#${key}`);
        $slider.value = defaultValues[key];
    }
};

document.addEventListener('input', getActiveElement);

resetButton.addEventListener('click', setDefaults);

document.addEventListener('onDOMContentLoaded', setDefaults);
