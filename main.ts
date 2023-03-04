let distancia = 0
let Encontrado = 0
let perseguir = 0
basic.pause(2000)
while (!(Encontrado)) {
    distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (distancia < 30) {
        Encontrado = 1
    }
}
while (Encontrado) {
    distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (distancia > 30) {
        perseguir = 1
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 15)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 15)
    } else {
        if (perseguir) {
            perseguir = 0
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
}
