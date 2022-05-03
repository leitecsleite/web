import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/img/bug.png';
import ideaImageUrl from '../../assets/img/idea.svg';
import thoughtImageUrl from '../../assets/img/Thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },

    IDEA: {
        title: 'Idea',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lampada'
        }
    },

    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de balão de pensamento'
        }
    },
}


export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedback, setFeedback] = useState<FeedbackType | null>(null);

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {!feedback ? (
              <FeedbackTypeStep 
                 onFeedbackTypeChanged ={setFeedback}
              />
            ) : (
                <FeedbackContentStep feedbackType ={feedback}/>
             )}

            <footer className='text-xs text-neutral-400'>
                Feito com o amor <a href="" className='underline underline-offset-2'> Lucas Leite </a>
            </footer>
        </div>
    )
}