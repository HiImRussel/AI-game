import { AI_DATA } from "./store.js";

export const generateAiData = () => {
    const dataContainer = document.getElementById("js-ai-data-area");
    const jsonData = JSON.stringify(AI_DATA);

    dataContainer.innerHTML = "";
    dataContainer.innerHTML = jsonData;
};

export const importAiData = () => {
    const dataContainer = document.getElementById("js-ai-data-area");

    if (dataContainer.value.length === 0) return;

    const jsonData = JSON.parse(dataContainer.value);

    jsonData.forEach((data) => {
        AI_DATA.push(data);
    });

    dataContainer.innerHTML = "";

    console.log(AI_DATA);
};
