import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import axios from 'axios';
import DashContent from './DashContent';

export default function AdminDash() {
    

    const testRoute=(id)=>{
        // alert(id);
        axios.get(route('delProduct',{id:id})).then(respond=>{
          document.getElementById(respond.data).remove();
        })
    }
    
    return (
        <>
        <div className="page-holder">       
        <DashContent 
            delRoute={testRoute}
        />
        </div>
        </>
    );
}
