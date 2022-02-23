import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyB1bsDGMvkeRdZrPm7qdmnt0L9hefh4m60',
	authDomain: 'house-marketplace-app-4e06b.firebaseapp.com',
	projectId: 'house-marketplace-app-4e06b',
	storageBucket: 'house-marketplace-app-4e06b.appspot.com',
	messagingSenderId: '314683997731',
	appId: '1:314683997731:web:d1a188489ba7ef69b43b96',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
