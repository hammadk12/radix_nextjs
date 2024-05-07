import * as React  from 'react'
import * as Toast from '@radix-ui/react-toast'
import { Button, Card, Grid } from '@radix-ui/themes'

const contact = () => {

const [open, setOpen] = React.useState(false)
const [formFilled, setFormFilled] = React.useState(false)
const timerRef = React.useRef(0)

React.useEffect(() => {
    return () => clearTimeout(timerRef.current)
}, [])

const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the form is filled
    if (e.target.name.value && e.target.email.value && e.target.subject.value && e.target.message.value) {
        setFormFilled(true);
        // Show the toast notification
        setOpen(true);
        // Reset the form
        e.target.reset();
        // Set a timer to close the toast after 3 seconds
        timerRef.current = window.setTimeout(() => {
            setOpen(false);
            setFormFilled(false);
        }, 5000);
    }
}

  return (
    <Toast.Provider>
    <div className='px-8 md:mx-[100px] lg:mx-[500px] mt-20 mb-32'> 
    <Card size='5' className='bg-[#853ff916]'>
      <h2 className='text-3xl font-bold text-center text-[#baa7ff] mb-10'>Contact Us</h2>
      <form 
        onSubmit={handleSubmit}
        action='https://formspree.io/f/xrgnoqgb'
        method='POST'
        >
        <Grid gap='4' columns='1fr 1fr' rows='auto auto auto auto' >
          <input className="p-4 alt-font" type='text' name='name' placeholder='Name' required />
          <input className="p-4 alt-font" type='text' name='email' placeholder='Email' required />
          <input className="p-4 alt-font col-span-2" type='text' name='subject' placeholder='Subject' required />
          <textarea className="p-4 alt-font resize-none col-span-2 " name='message' placeholder='Message' cols={30} rows={10} required ></textarea>

            <Button 
                className='mt-4 mb-8 col-span-2 shadow-xl'
                type='submit'
                disabled={formFilled}
            >
                Submit
            </Button>
            </Grid>
            </form>
            </Card>

            <Toast.Root
                className="bg-[#e3defffe] text-black rounded-md p-[15px]"
                open={open}
                onOpenChange={setOpen}
                onClick={() => setOpen(false)}
            >
            <Toast.Title className="mb-[5px] font-medium text-[15px]">
                Form Submitted
            </Toast.Title>
            <Toast.Description asChild>
                <div>
                Allow 24 hours for a response.
                </div>
            </Toast.Description>
            </Toast.Root>
            <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col  p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
            </div>
          </Toast.Provider>
  )
}

export default contact