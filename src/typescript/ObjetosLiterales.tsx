interface Persona{
    nombreCompleto: string,
    edad: number,
    direccion: Direccion
}

interface Direccion{
    pais: string,
    casaNo: number
}


export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Mario',
        edad: 28,
        direccion: {
            pais: 'Guatemala',
            casaNo: 1220
        }
    }

   

  return (
    <>
        <h3>Objetos Litereales</h3>
        <code>
            <pre>
                {JSON.stringify(persona,null,2)}
            </pre>
        </code>
    </>
  )
}
