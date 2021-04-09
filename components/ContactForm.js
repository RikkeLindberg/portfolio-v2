import Button from './ui/Button';

export default function ContactForm() {
    return (
        <div>
            <form>
                <input type="text" placeholder="Ola Nordman"/>

                <input type="text" placeholder="example@mail.com"/>

                <input type="text" placeholder="Topic"/>

                <textarea name="message" id="message" placeholder="Your Message.."></textarea>

                <Button type="submit" />
            </form>
        </div>
    )
}
