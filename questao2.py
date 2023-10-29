def animalVencedor(rex, bob, oli):
    dist_rex_oli = abs(rex - oli)
    dist_bob_oli = abs(bob - oli)
    
    if dist_rex_oli < dist_bob_oli:
        return "Rex"
    elif dist_rex_oli > dist_bob_oli:
        return "Bob"
    else:
        return "Oli"

print(animalVencedor(5, 8, 6))
print(animalVencedor(8, 5, 6))
print(animalVencedor(7, 7, 6))
