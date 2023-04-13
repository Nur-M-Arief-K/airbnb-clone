const styles = {
    inputContainer: "w-full relative",
    currency: "absolute text-neutral-200 top-5 left-2",
    input: (formatPrice: boolean, errors: any) => {
        const staticStyles = "peer w-full p-4 pt-6 border-2 rounded-md outline-none font-light bg-white transition disabled:opacity-70 disabled:cursor-not-allowed"
        const dynamicStyles: string[] = [];

        formatPrice ? dynamicStyles.push("pl-9") : dynamicStyles.push("pl-4");

        errors ? dynamicStyles.push("border-rose-500 focus:border-rose-500"): dynamicStyles.push("border-neutral-300 focus:border-black");

        return `${staticStyles} ${dynamicStyles.join(" ")}`
    },
    label: (formatPrice: boolean, errors: any) => {
        const staticStyles = "absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4";
        const dynamicStyles: string[] = [];

        formatPrice? dynamicStyles.push("left-9") : dynamicStyles.push("left-4");

        errors ? dynamicStyles.push("text-rose-500") : dynamicStyles.push("text-zinc-400");

        return `${staticStyles} ${dynamicStyles.join(" ")}`;

    }
}

export default styles;