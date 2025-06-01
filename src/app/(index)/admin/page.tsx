'use client';
import { Button, Callout, Card } from '@radix-ui/themes';
import { useState, type FormEvent } from 'react';
import style from './style.module.scss';
import { InfoCircledIcon } from '@radix-ui/react-icons';

export default function AdminPage() {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [fileName, setFileName] = useState('No file selected');

    async function handleChange(event: FormEvent<HTMLInputElement>) {
        setFileName(event.currentTarget.files?.[0]?.name || 'No file selected');
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setError('');
        setSuccess('');

        const formData = new FormData(event.currentTarget);
        const image = formData.get('specials');
        if (!image) {
            setError('No image selected');
            return;
        }
        const file = image as File;
        if (file.size === 0) {
            setError('No image selected');
            return;
        }

        const response = await fetch('/admin/upload', {
            method: 'POST',
            body: file,
            headers: {
                'Content-Type': file.type,
            },
        });
        const message = await response.text();
        if (response.status === 200) {
            setError('');
            setSuccess(message);
            return;
        } else {
            setSuccess('');
            setError(message);
        }
    }

    return (
        <div className={style.Container}>
            <Card className={style.Card}>
                <form onSubmit={handleSubmit} className={style.Form}>
                    <label htmlFor="fileInput" className={style.FileLabel}>
                        <h1>Click here to select a file</h1>
                        <p className={style.FileName}>{fileName}</p>
                    </label>

                    <input
                        type="file"
                        id="fileInput"
                        name="specials"
                        accept="image/png, image/jpeg"
                        className={style.FileInput}
                        onChange={handleChange}
                    />
                    <Button className={style.Submit} size="3">Upload</Button>
                </form>
                {error && (
                    <Callout.Root color="red" className={style.Callout} size="1">
                        <Callout.Icon>
                            <InfoCircledIcon />
                        </Callout.Icon>
                        <Callout.Text>{error}</Callout.Text>
                    </Callout.Root>
                )}
                {success && (
                    <Callout.Root color="green" className={style.Callout} size="1">
                        <Callout.Icon>
                            <InfoCircledIcon />
                        </Callout.Icon>
                        <Callout.Text>{success}</Callout.Text>
                    </Callout.Root>
                )}
            </Card>
        </div>
    );
}
