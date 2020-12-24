console.log("Скрипт загружен")

let formData = new FormData();

var buttonsubmit = document.forms.myform.elements.submit;
buttonsubmit.addEventListener("click", buttonPressed);

function buttonPressed(evt) {
  formData.set('subject', document.forms.myform.elements.subject.value);
  formData.set('messege', document.forms.myform.elements.messege.value);

  console.log("Кнопка нажата загружен");
  evt.preventDefault();
  
  if (formData.get('subject').length < 6) {
    Swal.fire(
      'Ошибка!',
      'Не быват таких проблем!',
      'error'
    )
    console.log('Не быват таких проблем!');
    return;
  }

  if (formData.get('messege').length < 16) {
    Swal.fire(
      'Ошибка!',
      'Слишком короткое сообщение!',
      'error'
    )
    console.log('Слишком короткое сообщение!');
    return;
  }

  Swal.fire(
    'Отлично!',
    'Мы уже решаем вашу проблему - ' + formData.get('subject'),
    'success'
  )

}
