// 1 // 

const eventHandler = (cb, event = 1) => {
    if (event <= 10) {
        setTimeout(() => {
            cb(`${event}`);
            eventHandler(cb, event + 1);
        }, 3000);
    }  
}

eventHandler(event => {
    console.log('event => ', event);
});


// 2 //


//const eventHandler = cb => {
//    let event = 1;

//    const interval = setInterval(() => {
//        cb(`${event}`);
//        event++;

//        if (event >= 10) {
//            clearInterval(interval);
//            console.log('Оновлення даних завершено успішно!');
//        }
//    }, 3000);
//};

//eventHandler(event => {
//    console.log('event => ', event);
//});




