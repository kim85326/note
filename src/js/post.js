const options = {
    theme: "snow",
    modules: {
        toolbar: [
            [{ font: [] }], // 字型
            [{ size: [] }], // 字體大小
            ["bold", "italic", "underline", "strike"], // 粗體、斜體、底線、刪除線
            [{ align: [] }], // 對齊方向
            ["link", "image"],
        ],
    },
};
const quill = new Quill("#editor", options);
