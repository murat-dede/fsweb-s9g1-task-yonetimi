import React from 'react';
import {useState,useEffect} from 'react';
import {useForm} from 'react-hook-form';
export default function TaskHookForm() {
  const{register,handleSubmit}=useForm();
  const onSubmit = data => console.log(data);
  return (
  <form onSubmit={handleSubmit(onSubmit)}>
     <div className='form-line'>
     <label className="input-label" htmlFor="description">
          Açıklama
        </label>
        <input type="submit" />
        <textarea
          className="input-textarea"
          rows="3"
          id="description"
          name="description"
        
        ></textarea>
     </div>
     <div className='form-line'>
     <label className="input-label">İnsanlar</label>
     <label>
     <input type='checkbox'className='input_checkbox'
     name='people'
     value='Murat' />
     </label>
      </div>
    </form>
  )
}
