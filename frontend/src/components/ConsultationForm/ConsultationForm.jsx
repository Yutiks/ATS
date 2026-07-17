import { useState } from "react";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";


function ConsultationForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        idea: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        await fetch("http://localhost:5678/webhook-test/consultation", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="Full Name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
            />

            <Input
                label="Email"
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
            />

            <Input
                label="Phone"
                type="tel"
                name="phone"
                placeholder="+353..."
                value={formData.phone}
                onChange={handleChange}
            />

            <Input
                label="Preferred Date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
            />

            <div>
                <label htmlFor="idea">Tattoo Idea</label>

                <textarea
                    id="idea"
                    name="idea"
                    rows="6"
                    placeholder="Describe your tattoo idea..."
                    value={formData.idea}
                    onChange={handleChange}
                />
            </div>

            <Button type="submit">
                Book Consultation
            </Button>
        </form>
    );
}

export default ConsultationForm;
