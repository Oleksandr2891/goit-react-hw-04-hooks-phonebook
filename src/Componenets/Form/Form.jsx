import { FormWrapper } from "./FormStyled";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export default function Form({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChangeInput = event => {
        const { name, value } = event.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                alert("нет такой кнопки");
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit({ name, number, id: uuidv4() });
        setName('');
        setNumber('')
    }


    return (
        <FormWrapper onSubmit={handleSubmit}>
            <label>
                Name
                <input
                    className="input"
                    onChange={handleChangeInput}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    value={name}
                    required
                />
            </label>
            <label>
                Number
                <input
                    className="input"
                    onChange={handleChangeInput}
                    value={number}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                />
            </label>
            <button type="submit" className="buttonSubmit">Add contact</button>
        </FormWrapper>
    );
}