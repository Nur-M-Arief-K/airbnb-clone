const styles = {
    button: (outline: boolean, small: boolean) => {
        const staticStyles = "w-full relative rounded-lg transition  disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-80";

        let dynamicStyles: string[] = [];

        outline ? dynamicStyles.push("bg-white border-black text-black") : dynamicStyles.push("bg-rose-500 border-rose-500 text-white");

        small ? dynamicStyles.push("py-1 text-sm font-light border-[1px]") : dynamicStyles.push("py-3 text-md font-semibold border-2");

        return `${staticStyles} ${dynamicStyles.join(" ")}`
    },
    icon: "absolute left-4 top-3"
}

export default styles;