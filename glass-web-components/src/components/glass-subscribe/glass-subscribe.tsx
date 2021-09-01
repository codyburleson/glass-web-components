
import { Component, Prop, State, h } from '@stencil/core';

@Component({
    tag: 'glass-subscribe',
    // styleUrl: 'glass-subscribe.css',
    shadow: false,
})
export class GlassSubscribe {

    /*
    Expect:

    {
        "success": {
            "heading": "Thank you for subscribing!",
            "message": "You should find a confirmation email in your inbox. If not, please check your spam folder and the FROM address to your trusted contacts."
        }
    }

    OR

    {
        "error": {
            "heading": "You're already a subscriber.",
            "message": "The system found that your email is already in our database."
        }
    }

    */

    @Prop() action: string;

    @State() fName: string;
    @State() email: string;

    private handleSubmit(e) {
        //alert('>> handleSubmit() > this.action: ' + this.action)
        e.preventDefault()
        console.log('>> handleSubmit: > fName: ' + this.fName + ' | email: ' + this.email + ' | action: ' + this.action);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": this.email,
            "fName": this.fName
        });

        var requestOptions: RequestInit = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(this.action, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }

    handleFNameChange(event) {
        this.fName = event.target.value;
    }

    handleEmailChange(event) {
        this.email = event.target.value;
    }

    render() {
        return (

        <div class="card">
            <div class="card-header">
                Subscribe
            </div>
            <div class="card-body">
                <h5 class="card-title">Get project news and announcements by email</h5>
                <p class="card-text">Signup for updates; don't worry, I will never share your information.</p>
                <form id="subscribeForm" onSubmit={(e) => this.handleSubmit(e)}>
                    <div class="mb-3">
                        <label htmlFor="fName" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="fName" name="fName" value={this.fName} onInput={(event) => this.handleFNameChange(event)} />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="email" class="form-label">Email</label>
                        <input type="text" class="form-control" id="email" name="email" value={this.email} onInput={(event) => this.handleEmailChange(event)} />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        );
    }
}