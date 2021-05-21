console.log('Topic: Promises');
// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
const p1 = new Promise(()=> {
  console.log('Promise is created');
})
console.log(p1);

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
const p2 = Promise.resolve('Promise Data');
p2.then((value) => console.log(value));

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
const p3 = Promise.reject('Promise Error');
p3.catch((value) => console.log(value));

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
const p4 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise Data');
  }, 3000)
})

p4.then((value) => console.log(value));

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.
const handlePromise = {
  promise: null,
  resolve: null,
  reject: null,
  onSuccess(paramName) {
    console.log(`Promise is resolved with data: ${paramName}`);
  },
  onError(paramName) {
    console.log(`Promise is rejected with error: ${paramName}`);
  }
};

document.querySelector('#btn-create-promise')
  .addEventListener('click', () => {
    handlePromise.promise = new Promise((resolve, reject) =>{
      handlePromise.resolve = resolve;
      handlePromise.reject = reject;
    }).then(handlePromise.onSuccess, handlePromise.onError);
  });

document.querySelector('#btn-resolve-promise')
  .addEventListener('click', () => {
    handlePromise.resolve('Ok');
  });

document.querySelector('#btn-reject-promise')
  .addEventListener('click', () => {
    handlePromise.reject('Error');
  });

// Task 06
// Используйте предыдущее задание. Продублируйте строчку с методом then
document.querySelector('#btn-create-promise')
  .addEventListener('click', () => {
    handlePromise.promise = new Promise((resolve, reject) =>{
      handlePromise.resolve = resolve;
      handlePromise.reject = reject;
    })
      .then(handlePromise.onSuccess, handlePromise.onError)
      .then(handlePromise.onSuccess, handlePromise.onError);
  });


// Task 07
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и зарегистрируйте созданные функции.
const p7 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("My name is");
  }, 1000)
});

const onSuccess = (str) => {
  return `${str} Aleksandr`;
}

p7.then((value) => onSuccess(value)).then((v) => console.log(v));

// Task 08
// Используйте предыдущий код. Добавьте в функци onSuccess генерацию исключения
// Обработайте даное исключение, используя catch. Обратите внимание,
// что метод print при этом не выполняется.
const p8 = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 1000)
});

const onSuccessWithError = (str) => {
  if (!str) {
    throw new Error('Wrong string');
  }

  return `${str} Aleksandr`;
}

p8
  .then((value) => onSuccessWithError(value))
  .then((v) => console.log(v))
  .catch((err) => console.log(err));

// Task 09
// Напишите функцию getPromiseData, которая принимает один параметр - промис. Функция получает
// значение промиса и выводит его в консоль
// Объявите объект со свойтвом name и значением Anna.
// Создайте врапер для этого объекта и вызовите для него функцию getPromiseData
const getPromiseData = (p) => {
  console.log(p);
};

const myObj = {
  name: 'Anna'
};

Promise.resolve(myObj).then((obj) => getPromiseData(obj.name));

// Task 10
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// а второй промис возвращает объект {age: 16} через 3 с.
// Получите результаты работы двух промисов, объедините свойства объектов
// и выведите в консоль
const p10_1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve({name: 'Anna'})
  }, 2000);
});

const p10_2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve({age: 16})
  }, 3000);
});

Promise.all([p10_1, p10_2]).then((results)=>{
  console.log(`${results[0].name} is ${results[1].age} old`);
});

// Task 11
// Используйте предыдущее задание. Пусть теперь второй промис переходит в
// состояние rejected со значением "Promise Error". Измените код, чтобы обработать
// эту ситуацию.
const p11_1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve({name: 'Anna'})
  }, 2000);
});

const p11_2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise Error');
  }, 3000);
});

Promise.all([p11_1, p11_2])
  .then((results) =>{
  console.log(`${results[0].name} is ${results[1].age} old`);
  })
  .catch((err) => console.log(err));


// Task 12
// Создайте промис, который перейдет в состояние resolve через 5с и вернет строку
// 'Promise Data'.
// Создайте второй промис, который перейдет в состояние rejected по клику на
// кнопку "Cancel Promise". Добавьте обработчик для кнопки.
// Используя метод race организуйте "отмену промиса".
const p12_1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise Data');
  }, 5000);
});

const p12_2 = new Promise((resolve, reject) => {
  handlePromise.reject = reject;
});

Promise.race([p12_1, p12_2]).then((res) => console.log(res))
        .catch((err) => console.log(err));

document.querySelector('#btn-cancel-promise')
  .addEventListener('click', () => {
      handlePromise.reject('Cancel Promise');
  });
