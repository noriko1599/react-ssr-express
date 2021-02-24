const btn = document.getElementById('next')

rxjs.fromEvent(btn, 'click')
    .pipe(
        rxjs.operators.tap(e => console.log(e))
    )
    .subscribe()