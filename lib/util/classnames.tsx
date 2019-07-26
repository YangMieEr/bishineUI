

export function classes(
    ...args: Array<
        string | string[] | { [propName: string]: any } | null | undefined
    >
): string {
    const classNames: string[] = [];

    args.forEach(arg => {
        if (typeof arg === "string") {
            classNames.push(arg);
        } else if (arg instanceof Array) {
            arg.forEach(item => classNames.push(item));
        } else if (typeof arg === "object" && arg !== null) {
            for (const key in arg) {
                if (arg.hasOwnProperty(key) && arg[key]) {
                    classNames.push(key);
                }
            }
        }
    });

    return classNames.filter(v => v).join(" ");
}