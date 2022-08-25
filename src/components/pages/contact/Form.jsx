import Button from '../../shared/Button';
import Input from './Input';

const Form = () => {
  return (
    <div className='flex flex-col items-center w-full lg:w-1/2 m-auto'>
      <form className='w-full'>
        <div className='flex flex-col sm:flex-row gap-x-4'>
          <Input type='text' placeholder={'Name'} />
          <Input type='email' placeholder={'Email'} />
        </div>
        <Input type='text' placeholder={'Title'} />
        <Input type='textarea' placeholder={'Description'} />
        <Button styles='w-full' text='Submit!' />
      </form>
    </div>
  );
};
export default Form;
