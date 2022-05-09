import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

document.getElementById("nav-icon3").addEventListener("click", function () {
    document.getElementById("nav-icon3").classList.toggle("open");
});


ClassicEditor.create(document.querySelector('.ckeditor'))
    .then(editor => {
        window.editor = editor;
    })
    .catch(error => {
        console.error('There was a problem initializing the editor.', error);
    });

