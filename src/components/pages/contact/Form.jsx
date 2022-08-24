import Input from './Input';

const Form = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <form className='w-full'>
        <div className='flex flex-col sm:flex-row gap-x-4'>
          <Input type='text' placeholder={'Name'} />
          <Input type='email' placeholder={'Email'} />
        </div>
        <Input type='text' placeholder={'Title'} />
        <Input type='textarea' placeholder={'Description'} />
        <button className='w-full mt-4 py-2 px-4 border rounded bg-sky-600 text-white'>
          Submit!
        </button>
      </form>
    </div>
  );
};
export default Form;
