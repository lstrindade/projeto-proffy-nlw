import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';

interface Teacher{
    teacher: {
        id: number;
        avatar: string;
        bio: string;
        cost: number;
        name: string;
        subject: string;
        whatsapp: string;
    }
}

function TeacherList(){

    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent){
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });

        setTeachers(response.data);
        console.log(response.data);
    }

    return (
        <div id="page-teacher-list" className="container"> 
            <PageHeader title="Esses são os proffys disponíveis" >
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select 
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={(e) =>{ setSubject(e.target.value) }}
                        options={[
                            {value: 'Artes', label:'Artes'},
                            {value: 'Biologia', label:'Biologia'},
                            {value: 'Ciências', label:'Ciências'},
                            {value: 'Matemática', label:'Matemática'},
                            {value: 'Física', label:'Física'},
                            {value: 'Química', label:'Química'},
                            {value: 'Geografia', label:'Geografia'},
                            {value: 'Análise de Dados', label:'Análise de Dados'}
                        ]}
                    />

                    <Select 
                        name="week-day" 
                        label="Dia da semana"
                        value={week_day}
                        onChange={(e) =>{ setWeekDay(e.target.value) }}
                        options={[
                            {value: '0', label:'Domingo'},
                            {value: '1', label:'Segunda-feira'},
                            {value: '2', label:'Terça-feira'},
                            {value: '3', label:'Quarta-feira'},
                            {value: '4', label:'Quinta-feira'},
                            {value: '5', label:'Sexta-feira'},
                            {value: '6', label:'Sábado'}
                        ]}
                    />
                    <Input 
                        type="time" 
                        name="time" 
                        label="Hora" 
                        value={time}
                        onChange={(e) =>{ setTime(e.target.value) }}
                    />

                    <button type="submit"> 
                        Buscar
                    </button>
                </form>
            </PageHeader>  

            <main>
                {teachers.map(teacher => {
                    return <TeacherItem teacher={teacher} />
                })}
            </main>
        </div>
    )
}

export default TeacherList; 
