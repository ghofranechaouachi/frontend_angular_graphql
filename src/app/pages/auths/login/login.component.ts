import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from './services/login.service';
import { Apollo, ApolloModule } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloClient } from '@apollo/client';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from '@apollo/client/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule,FloatLabelModule,PasswordModule,ButtonModule,CommonModule,ReactiveFormsModule],
  providers:[ApolloModule,Apollo],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LoginComponent {


  myForm: FormGroup;


  constructor(private fb: FormBuilder,private loginService: LoginService,private apollo: Apollo, httpLink: HttpLink) {
    this.myForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  loading = true;


  ngOnInit(): void {
    // Fetch data using Apollo Client
    this.apollo
      .query<any>({
        query: gql`
          query {
            users {
              username
              email
              role
            }
          }
        `,
      })
      .subscribe(({ data, loading }) => {
        console.log(data);
        
       });
  }


  onSubmit(): void {
    if (this.myForm.valid) {
      console.log('Form Submitted!', this.myForm.value);
      // this.onLogin(this.myForm.value)
    } else {
      console.log('Form is invalid');
    }
  }

  // onLogin(params:any) {
  //   this.loginService.login(params).subscribe(
  //     (result) => { 
  //       console.log('Login successful:',result);
  //       // Handle successful login
  //     },
  //     (error) => {
  //       console.error('Login error:', error);
  //       // Handle login error
  //     }
  //   );
  // }

}
