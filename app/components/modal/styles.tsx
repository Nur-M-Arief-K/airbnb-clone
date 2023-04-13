const styles = {
    backdrop: "flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-500/70",
    wrapper: "relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto",
    modal: (showModal: boolean) => {
        const staticStyle = "h-full translate duration-300";
        let dynamicStyle: string;

        showModal ? dynamicStyle = "translate-y-0 opacity-100" : dynamicStyle = "translate-y-full opacity-0";

        return `${staticStyle} ${dynamicStyle}`
    },
    modalContent: "relative h-full md:h-auto border-0 rounded-lg shadow-lg translate flex flex-col w-full bg-white outline-none focus:outline-none",
    header: "relative flex items-center p-6 rounded-t justify-center",
    button: "absolute p-1 border-0 left-9 transition hover:opacity-70",
    title: "text-lg font-semibold",
    body: "relative p-6 flex-auto",
    footer: "flex flex-col gap-2 p-6",
    footerContent: "w-full flex flex-row items-center gap-4"
};

export default styles;