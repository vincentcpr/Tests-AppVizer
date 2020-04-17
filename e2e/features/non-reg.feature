Feature: Tests de la todo liste

  Scenario: Ajout d'une tâche
    Given Je suis sur le site de la todolist
    When J'ajoute la tâche nommée 'foo' dans ma todolist
    Then Je vois la tâche 'foo' dans ma liste

  Scenario: Modification du statut d'une tâche
    Given Je suis sur le site de la todolist
    When Je change d'état la première tâche dans ma todolist en réalisée
    Then Je vois la première tâche comme reéalisée dans ma liste

  Scenario: Modification du statut d'une tâche
    Given Je suis sur le site de la todolist
    When Je change d'état la première tâche dans ma todolist en non-réalisée
    Then Je vois la première tâche comme non-reéalisée dans ma liste

  Scenario: Suppression d'une tâche
    Given Je suis sur le site de la todolist
    When Je supprime la tâche de ma todolist
    Then Je ne vois aucune tâche dans ma liste
