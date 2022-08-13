import './write.css'

export default function Write() {
    return (
        <div className='write'>
            <img 
                className="writeImg"
                src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
            />
            <form className='writeForm'>
                <div className='writeFormGroup'>
                    <label htmlFor='fileInput'>
                    <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' />
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
                </div>
                <div className='writeFormGroup'>
                    <textarea
                        placeholder='Review text goes here...'
                        type="text"
                        className='writeInput writeText'
                    ></textarea>
                </div>
                <button className='writeSubmit'>Publish</button>
            </form>
        </div>
    )
}