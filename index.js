let power,duration,kilowatt,consumed;
document.getElementById('units').onclick = function(){
    power = document.getElementById('watt').value ;
    duration = document.getElementById('time').value;
    power = Number(power)
    duration = Number(duration)
    kilowatt = power/1000;
    consumed = kilowatt*duration;
    consumed = consumed.toFixed(2)
    document.getElementById('consumption').textContent = `${consumed}`;
}

