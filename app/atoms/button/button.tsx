"use client";
import { useState } from 'react';

import { Button } from 'primereact/button';

interface CreateButtonProps {
  label: string;
  icon: string;
}

export default function CreateButton({ label, icon }: CreateButtonProps) {
  const [loading, setLoading] = useState<boolean>(false);

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    return <Button className='p-3 border-round-xl gap-3' label={label} icon={icon} loading={loading} onClick={load} />
}