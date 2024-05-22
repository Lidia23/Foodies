'use server';// funksioni duhet të jetë async, nuk mund të përdoret kur faqja është use client
import { redirect } from "next/navigation";
import { saveMeal } from "./meals"
import { revalidatePath } from "next/cache";

function isInvalidText(text){
  return !text || text.trim() === '';
}
export async function shareMeal(prevState,formData){
    const meal = {
      title: formData.get('title'),
      creator: formData.get('name'),
      creator_email: formData.get('email'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image')
    }

    if(
      isInvalidText(meal.title) || 
      isInvalidText(meal.creator) || 
      isInvalidText(meal.creator_email) || 
      !meal.creator_email.includes('@') ||
      isInvalidText(meal.summary) || 
      isInvalidText(meal.instructions) || 
      !meal.image || meal.image.size === 0){
        return {
          message: 'Invalid input.'
        };
    }
    await saveMeal(meal);
    revalidatePath('/meals'); //revalidate cache, to revalidate also nested pages should add ('/meals', 'layout'), if want to revalidate all pages ('/', 'layout')
    redirect('/meals');
}