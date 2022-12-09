

export const TiposBasicos = () => {
    
    const nombre: string | number = 'Fernando';
    const edad: number = 35;
    const estaActivo: boolean = true;
    const poderes: string[] = [];


   
    
    return (
        <>
            <h3>Tipos basicos</h3>
            {nombre},{edad},{(estaActivo)?'activo':'noActivo'} 
            <br />
            {poderes.join(', ')}
        </>
    
    )
}
