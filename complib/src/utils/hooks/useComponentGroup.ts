import { useCards } from './useCards';
import { useButtons } from './useButtons';

export function useComponentGroups() {
  const cards = useCards();
  const buttons = useButtons();

  return {
    Cards: cards,
    Buttons: buttons,
  };
}
