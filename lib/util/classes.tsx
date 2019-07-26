function classes (...names:Array<null | string | undefined>) : string {
    return names.filter(Boolean).join(' ');
}

export default classes;