import CreateButton from '@/app/atoms/button/button';
import styles from './form.module.css';
import { useForm } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { userService } from '@/src/services/user.service';
import { ESTADOS, SECTORES } from '@/src/utils/utils';

interface FormModalProps {
  user: any;
  createUser: (user: any) => void;
  onClose: () => void;
}

export default function Form({ user, createUser, onClose }: FormModalProps) {
  const { register, handleSubmit, formState: { errors }, watch }: any = useForm({
    defaultValues: {
      id: user?.id,
      usuario: user?.usuario,
      estado: user?.estado,
      sector: user?.sector,
    }
  });

  const watchedEstado = watch('estado');
  const watchedSector = watch('sector');

  const onSubmit = async (formData: any) => {
    const { id, ...userData } = formData;

    const { data } = id ? await userService.update(userData, id) : await userService.create(userData);
    createUser(data);
    onClose();
  };

  return (
    <form className={styles['modal-form']} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles['searcher-input-container']}>
        <label>id</label>
          <InputText
            className={styles['searcher-input']}
            placeholder='id del usuario'
            disabled={true}
            name='id'
            {...register('id')}
          />
      </div>
      <div className={styles['searcher-input-container']}>
        <label>Nombre:</label>
        <InputText
          className={styles['searcher-input']}
          placeholder='Ingrese el nombre del usuario'
          name='usuario'
          {...register('usuario', {
            required: true,
            minLength: 3
          })}
        />
        {errors.usuario?.type === 'required' && <span className='text-red-500'>El usuario es requerido</span>}
        {errors.usuario?.type === 'minLength' && <span className='text-red-500'>El usuario debe tener 3 o más carácteres</span>}
      </div>
      <div className={styles['searcher-input-container']}>
        <label>Estado:</label>
        <Dropdown
          className={styles['searcher-dropdown']}
          value={watchedEstado}
          options={ESTADOS}
          placeholder='Seleccionar el Estado'
          {...register('estado', {
            required: true
          })}
        />
        {errors.estado?.type === 'required' && <span className='text-red-500'>El estado es requerido</span>}
      </div>
      <div className={styles['searcher-input-container']}>
        <label>Sector:</label>
        <Dropdown
          className={styles['searcher-dropdown']}
          value={parseInt(watchedSector)} //Parseamos a entero 
          options={SECTORES}
          placeholder='Seleccionar el Sector'
          {...register('sector', {
            required: true,
          })}
        />
        {errors.sector?.type === 'required' && <span className='text-red-500'>El sector es requerido</span>}
      </div>
      <div className={styles['modal-footer']}>
        <CreateButton label="Confirmar" style='text-white bg-blue-600' icon="pi pi-check" outlined={false} onClick={() => { }} />
        <CreateButton label="Cancelar" icon="pi pi-times" outlined={true} onClick={onClose} />
      </div>
    </form>
  );
}
