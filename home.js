let timerId= setInterval(() => alert('Welcome Home'), 1000);
setTimeout(() => { clearInterval(timerId); alert('Bye'); }, 5000);

