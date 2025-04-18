import { useContext} from "react";
import { HandPalm, Play } from "phosphor-react";
import {FormProvider, useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import * as zod from "zod"

import { HomeContainer, StartCountdownButton, StopCountdownButton } from "./styles";
import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";
import { CyclesContext } from "../../contexts/CyclesContext";


export function Home (){
    
    const {activeCycle, createNewCycle, interruptCurrentCycle} = useContext(CyclesContext)

    const newCycleFormValidatopnSchema = zod.object({
        task: zod.string().min(1, "Infome a tarefa"),
        minutesAmount: zod.number().min(5).max(60)
    })
    
    type NewCycleFormData = zod.infer<typeof newCycleFormValidatopnSchema>

    const newCycleForm = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidatopnSchema),
        defaultValues: {
            task: "",
            minutesAmount: 0
        }
    })
    
    const {handleSubmit, watch, reset} = newCycleForm

    function handleCreateNewCycle(data: NewCycleFormData) {
        createNewCycle(data)
        reset()
    }

    const task = watch("task")

    return(
        <HomeContainer>
            <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormProvider {...newCycleForm}>
                    <NewCycleForm/>

                </FormProvider>

                <Countdown/>

                {activeCycle ? (
                    <StopCountdownButton type="button" onClick={interruptCurrentCycle}>
                        <HandPalm size={24}/>
                        Interromper
                    </StopCountdownButton>
                ) : (
                    <StartCountdownButton disabled={!task} type="submit">
                        <Play size={24}/>
                        Começar
                    </StartCountdownButton>

                )}
            </form>

        </HomeContainer>
    )
}