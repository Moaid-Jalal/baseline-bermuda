export const ContactForm = () => {
    return (
        <form className="flex flex-col gap-7 w-full">
            <h1 className="text-3xl text-[#1F2937] text-center relative bottom-9">send us a message</h1>
            <input
                type="text"
                placeholder="Name"
                className="border rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#BD937B]"
                style={{fontFamily: 'Inter, sans-serif', fontSize: '20.46px'}}
            />
            <input
                type="email"
                placeholder="Email"
                className="border rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#BD937B]"
                style={{fontFamily: 'Inter, sans-serif', fontSize: '20.46px'}}
            />
            <textarea
                placeholder="Message"
                rows={6}
                className="border rounded px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#BD937B] resize-none"
                style={{fontFamily: 'Inter, sans-serif', fontSize: '20.46px'}}
            />
            <button
                type="submit"
                className=" text-[#565253] font-bold py-3 rounded text-lg border-1"
                style={{fontFamily: 'Inter, sans-serif', fontSize: '20.46px'}}
                >
                Send Message
            </button>
    </form>
    )
}