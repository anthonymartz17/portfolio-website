import { db, storage } from "../firebaseConfig";
import {
	collection,
	doc,
	getDoc,
	getDocs,
	addDoc,
	updateDoc,
	deleteDoc,
	serverTimestamp,
} from "firebase/firestore";
import {
	ref,
	getDownloadURL,
	getMetadata,
	uploadBytes,
	deleteObject,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

export default {
	async getProjects() {
		try {
			let data = [];
			const colRef = collection(db, "ProjectPosts");
			const snapshot = await getDocs(colRef);
			snapshot.docs.forEach((doc) => {
				data.push({
					id: doc.id,
					...doc.data(),
					created_at: doc.data().created_at
						? doc.data().created_at.toDate()
						: null,
				});
			});

			return data;
		} catch (error) {
			throw error;
		}
	},
	async getProjectById(projectId) {
		try {
			const docRef = doc(db, "ProjectPosts", projectId);

			const docSnapshot = await getDoc(docRef);

			if (docSnapshot.exists()) {
				return {
					id: docSnapshot.id,
					...docSnapshot.data(),
				};
			} else {
				throw new Error("Projects not found.");
			}
		} catch (error) {
			throw error;
		}
	},
	async createPost(projectData) {
		try {
			const colRef = collection(db, "ProjectPosts");

			const response = await addDoc(colRef, {
				...projectData,
				created_at: serverTimestamp(),
			});

			return response;

			// return profile
		} catch (error) {
			throw error;
		}
	},
	async updateProject(projectData) {
		try {
			const docRef = doc(db, "ProjectPosts", projectData.id);

			const docSnapshot = await getDoc(docRef);

			if (docSnapshot.exists()) {
				delete projectData.id;
				await updateDoc(docRef, projectData);
				return { id: docSnapshot.id, ...docSnapshot.data() };
			} else {
				throw new Error("Post not found.");
			}
		} catch (error) {
			throw error;
		}
	},
	async updateProjectVisibility({ projectId, isPublic }) {
		try {
			const postDocRef = doc(db, "ProjectPosts", projectId);

			const postDocSnapshot = await getDoc(postDocRef);

			if (postDocSnapshot.exists()) {
				await updateDoc(postDocRef, { isPublic: isPublic });
				const updatedPost = {
					id: postDocSnapshot.id,
					...postDocSnapshot.data(),
				};
				//updating isPublic to immediately reflect change locally, since data updates after page reload or route change.
				updatedPost.isPublic = !updatedPost.isPublic;
				return updatedPost;
			} else {
				throw new Error("Post not found.");
			}
		} catch (error) {
			throw error;
		}
	},
	async deleteProject(projectId) {
		try {
			const docRef = doc(db, "ProjectPosts", projectId);

			const docSnapshot = await getDoc(docRef);

			if (docSnapshot.exists()) {
				await deleteDoc(docRef);
				return { success: true, message: "post deleted successfully." };
			} else {
				throw new Error("Car not found.");
			}
		} catch (error) {
			throw error;
		}
	},

	async uploadThumbnail(thumbnail) {
		try {
			//creates unique name id for image
			const uniqueId = uuidv4();
			const imagePathRef = `projectThumbnails/${uniqueId}.jpg`;

			//creates refference unique for image
			const storageRef = ref(storage, imagePathRef);

			//uploads image to firebase
			await uploadBytes(storageRef, thumbnail);
			return imagePathRef;
		} catch (error) {
			throw error;
		}
	},

	async deleteThumbnail(imagePath) {
		try {
			const imageRef = ref(storage, imagePath);
			await deleteObject(imageRef);
			return { success: true, message: "Images deleted successfully." };
		} catch (error) {
			throw error;
		}
	},
	async getThumbnail(imagePath) {
		if (imagePath)
			try {
				const imageRef = ref(storage, imagePath);
				const imageUrl = await getDownloadURL(imageRef);
				// Get the metadata of the image
				const metadata = await getMetadata(imageRef);

				// Extract the name, type, and size from the metadata
				const name = metadata.name;
				const type = metadata.contentType;
				const size = metadata.size;

				return {
					dataURL: imageUrl,
					name: name,
					type: type,
					size: size,
				};
			} catch (error) {
				throw error;
			}
	},
};
