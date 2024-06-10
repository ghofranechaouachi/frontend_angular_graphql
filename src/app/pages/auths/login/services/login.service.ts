import { HttpClient } from '@angular/common/http';
import {  Injectable, inject } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



const LOGIN_MUTATION = gql`
  mutation login($loginDto: LoginInput!) {
    login(loginDto: $loginDto) {
      username
      email
      role
      token
    }
  }
`;

interface LoginResponse {
  login: {
    username: string;
    email: string;
    role: string;
    token: string;
  };
}

@Injectable({
  providedIn: 'root',
})

export class LoginService {



  // login(email: string, password: string) {
  //   return this.apollo.mutate<any>({
  //     mutation: LOGIN_MUTATION,
  //     variables: {
  //       loginDto: {
  //         email: email,
  //         password: password,
  //       },
  //     },
  //   });
  // }
}
