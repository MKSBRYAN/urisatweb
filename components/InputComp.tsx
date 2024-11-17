import * as React from 'react';

interface InputProps{
    type: 'text' | 'number' | 'email' | 'password';
    label: string;
    value: string | number;
    name: string;
    placeholder: string;
    error: boolean;
    desabled?: boolean;
    // onChange:(e:ChangeEvent<HTMLInputElement>) => void;
}