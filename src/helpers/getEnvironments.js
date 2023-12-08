
export const getEnvironments = () => {
    import.meta.env;//primero lo carga para poder llamarlo
    return {
        ...import.meta.env
    }
}
