import React, { Suspense } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Input from './UI/Input/Input';
import RadioGroup from './UI/RadioGroup/RadioGroup';
import Button from './UI/Button/Button';
import { useActions, useAppSelector } from '../hooks/useStoreHooks';
import { IUser } from '../types/IUser';

const DatepickerCal = React.lazy(() => import('./UI/DatepickerCal/DatepickerCal'));

const FormRegister = () => {
  const { user, step } = useAppSelector(state => state.user);
  const { setUser, setStep } = useActions();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: user,
    mode: 'onChange',
  });

  const submit = (data: IUser) => {
    setUser({ ...data, date: +new Date(data.date) });
    setStep(step + 1);
  };

  return (
    <>
      <h1 className="font-bold text-5xl mb-7 text-dblue md:text-3xl">Заполните анкету</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div className="items-start flex flex-wrap -mx-3 max-w-[900px]">
          <div className="col w-1/2 px-3 mb-4 md:w-full">
            <Controller
              name="name"
              rules={{ required: 'Укажите ваше имя' }}
              control={control}
              render={({ field }) => (
                <Input {...field} label="Ваше имя" message={errors.name?.message.toString()} />
              )}
            />
          </div>
          <div className="col w-1/2 px-3 mb-4 md:w-full">
            <Controller
              name="year"
              rules={{
                required: 'Укажите год рождения',
                pattern: {
                  value: /^\d{4}$/i,
                  message: 'Некорректный год рождения',
                },
              }}
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  mask="9999"
                  label="Год рождения"
                  placeholder="0000"
                  message={errors.year?.message.toString()}
                />
              )}
            />
          </div>
          <div className="col w-1/2 px-3 mb-4 md:w-full">
            <Controller
              name="sex"
              control={control}
              render={({ field: { value, onChange } }) => (
                <RadioGroup label="Пол">
                  <RadioGroup.Button
                    name="sex"
                    title="Мужской"
                    onChange={onChange}
                    value="male"
                    checked={value === 'male'}
                  />
                  <RadioGroup.Button
                    name="sex"
                    title="Женский"
                    onChange={onChange}
                    value="female"
                    checked={value === 'female'}
                  />
                </RadioGroup>
              )}
            />
          </div>
          <div className="col w-1/2 px-3 mb-4 md:w-full">
            <Controller
              name="status"
              control={control}
              render={({ field: { value, onChange } }) => (
                <RadioGroup label="Круг обязанностей">
                  <RadioGroup.Button
                    name="status"
                    title="Управление"
                    onChange={onChange}
                    value="manager"
                    checked={value === 'manager'}
                  />
                  <RadioGroup.Button
                    name="status"
                    title="Исполнение"
                    onChange={onChange}
                    value="executor"
                    checked={value === 'executor'}
                  />
                </RadioGroup>
              )}
            />
          </div>
          <div className="col w-1/2 px-3 mb-4 md:w-full">
            <Controller
              name="email"
              rules={{
                required: 'Укажите email',
                pattern: {
                  value:
                    /^(([0-9A-z]{1}[-0-9A-z\.]{0,}[0-9A-z]{1})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/i,
                  message: 'Некорректный e-mail адрес',
                },
              }}
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Email"
                  placeholder="mail@email.ru"
                  message={errors.email?.message.toString()}
                />
              )}
            />
          </div>
          <div className="col w-1/2 px-3 mb-4 md:w-full">
            <Suspense fallback={<div>Загрузка...</div>}>
              <Controller
                name="date"
                control={control}
                render={({ field: { value, onChange, ref } }) => (
                  <DatepickerCal selected={value} onChange={onChange} inputRef={ref} />
                )}
              />
            </Suspense>
          </div>
        </div>
        <Button>Следующий этап &#8594;</Button>
      </form>
    </>
  );
};

export default FormRegister;
