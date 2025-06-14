import React, { useState, useEffect } from 'react';
import { Edit3, Calendar, Dumbbell } from 'lucide-react';

const WorkoutTracker = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [weights, setWeights] = useState({});
  const [editingWeight, setEditingWeight] = useState(null);
  const [tempWeight, setTempWeight] = useState('');

  // Cargar datos al iniciar
  useEffect(() => {
    const savedWeights = localStorage.getItem('workoutWeights');
    const savedDay = localStorage.getItem('currentDay');
    
    if (savedWeights) {
      try {
        setWeights(JSON.parse(savedWeights));
      } catch (error) {
        console.error('Error loading saved weights:', error);
      }
    }
    
    if (savedDay) {
      setCurrentDay(parseInt(savedDay));
    }
  }, []);

  // Guardar pesos cuando cambien
  useEffect(() => {
    localStorage.setItem('workoutWeights', JSON.stringify(weights));
  }, [weights]);

  // Guardar día actual cuando cambie
  useEffect(() => {
    localStorage.setItem('currentDay', currentDay.toString());
  }, [currentDay]);

  const workoutData = {
    1: [
      {
        name: "Abs Cortos",
        series: 4,
        reps: "15",
        color: "blue"
      },
      {
        name: "Inferiores Elevación De Piernas",
        series: 4,
        reps: "15",
        color: "blue"
      },
      {
        name: "Espinales Nado",
        series: 4,
        reps: "15",
        color: "blue"
      },
      {
        name: "Movilidad De Hombros",
        series: 3,
        reps: "10",
        color: "green"
      },
      {
        name: "Jalón Al Pecho",
        series: 4,
        reps: "10 8 6",
        color: "green"
      },
      {
        name: "Remo Bajo Agarre Abierto",
        series: 4,
        reps: "10 8 8",
        color: "green"
      },
      {
        name: "Jalón Al Pecho Agarre Cerrado (Triangular)",
        series: 4,
        reps: "10 8 6",
        color: "green"
      },
      {
        name: "Remo Unilateral Con Mancuerna",
        series: 4,
        reps: "10",
        color: "green"
      },
      {
        name: "Press Militar En Máquina",
        series: 4,
        reps: "10 8 8",
        color: "red"
      },
      {
        name: "Vuelo Lateral Con Mancuernas",
        series: 4,
        reps: "12",
        color: "red"
      },
      {
        name: "Vuelo Frontal Con Mancuernas",
        series: 4,
        reps: "10",
        color: "red"
      },
      {
        name: "Deltoide Posterior En Peck Deck",
        series: 4,
        reps: "10 8 8",
        color: "red"
      }
    ],
    2: [
      {
        name: "Twist Oblicuos",
        series: 4,
        reps: "15",
        color: "blue"
      },
      {
        name: "Press Pallof",
        series: 4,
        reps: "10",
        color: "blue"
      },
      {
        name: "Espinales En Máquina",
        series: 4,
        reps: "15",
        color: "blue"
      },
      {
        name: "Dorsiflexión De Tobillo",
        series: 3,
        reps: "10",
        color: "green"
      },
      {
        name: "Movilidad De Cadera",
        series: 3,
        reps: "10",
        color: "green"
      },
      {
        name: "Sentadilla Smith",
        series: 4,
        reps: "12 10 8 6",
        color: "green"
      },
      {
        name: "Prensa 45 4 Capa",
        series: 4,
        reps: "10 8 6 4 10 10 10 10",
        color: "green"
      },
      {
        name: "Sillón De Cuádriceps",
        series: 4,
        reps: "15 12 10 8",
        color: "green"
      },
      {
        name: "Peso Muerto Con Barra",
        series: 4,
        reps: "12 10 8 8",
        color: "green"
      },
      {
        name: "Isquio De Pie",
        series: 4,
        reps: "10",
        color: "green"
      },
      {
        name: "Camilla Femoral",
        series: 4,
        reps: "15 12 10 8",
        color: "green"
      },
      {
        name: "Parada De Glúteo En Máquina",
        series: 4,
        reps: "10 10 8 8",
        color: "green"
      },
      {
        name: "Gemelos En Máquina Sentado",
        series: 4,
        reps: "10-10-8-8",
        color: "green"
      }
    ],
    3: [
      {
        name: "Abs Cortos",
        series: 4,
        reps: "15",
        color: "blue"
      },
      {
        name: "Inferiores Elevación De Piernas",
        series: 4,
        reps: "15",
        color: "blue"
      },
      {
        name: "Espinales Nado",
        series: 4,
        reps: "15",
        color: "blue"
      },
      {
        name: "Movilidad De Hombros",
        series: 3,
        reps: "10",
        color: "green"
      },
      {
        name: "Press Plano Con Barra",
        series: 4,
        reps: "10 8 6 6",
        color: "green"
      },
      {
        name: "Press Inclinado Con Mancuernas",
        series: 4,
        reps: "10",
        color: "green"
      },
      {
        name: "Press Declinado Con Barra",
        series: 4,
        reps: "10-10-8-8",
        color: "green"
      },
      {
        name: "Aperturas En Banco Plano Con Mancuernas",
        series: 4,
        reps: "12",
        color: "green"
      },
      {
        name: "Bíceps En Banco Scott Con Barra",
        series: 4,
        reps: "12 12 10 10",
        color: "red"
      },
      {
        name: "Bíceps Martillo Con Mancuerna",
        series: 4,
        reps: "10",
        color: "red"
      },
      {
        name: "Francés Con Barra",
        series: 4,
        reps: "10 10 8 8",
        color: "red"
      },
      {
        name: "Extensión Con Soga En Polea",
        series: 4,
        reps: "12 12 10 10",
        color: "red"
      }
    ]
  };

  const parseReps = (repsString) => {
    // Handle cases with dashes (like "10-10-8-8")
    if (repsString.includes('-')) {
      return repsString.split('-').map(Number);
    }
    // Handle cases with spaces (like "10 8 6")
    return repsString.split(' ').map(Number);
  };

  const getWeightKey = (exerciseName, setIndex) => {
    return `${currentDay}-${exerciseName}-${setIndex}`;
  };

  const getWeight = (exerciseName, setIndex) => {
    const key = getWeightKey(exerciseName, setIndex);
    return weights[key] || 0;
  };

  const handleEditWeight = (exerciseName, setIndex) => {
    const key = getWeightKey(exerciseName, setIndex);
    setEditingWeight(key);
    setTempWeight(weights[key]?.toString() || '');
  };

  const handleSaveWeight = () => {
    if (editingWeight && tempWeight !== '') {
      setWeights(prev => ({
        ...prev,
        [editingWeight]: parseFloat(tempWeight) || 0
      }));
    }
    setEditingWeight(null);
    setTempWeight('');
  };

  const handleCancelEdit = () => {
    setEditingWeight(null);
    setTempWeight('');
  };

  const getColorClasses = (color) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-500 border-blue-600';
      case 'green':
        return 'bg-green-500 border-green-600';
      case 'red':
        return 'bg-red-500 border-red-600';
      default:
        return 'bg-gray-500 border-gray-600';
    }
  };

  const currentWorkout = workoutData[currentDay];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-400 to-red-400 p-4 rounded-b-2xl text-white">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h1 className="text-lg font-bold">AM3</h1>
            <p className="text-sm opacity-90">Personalizado</p>
            <p className="text-xs opacity-75">2024/11</p>
          </div>
          <div className="text-right">
            <p className="text-sm">Instructor</p>
            <p className="text-lg font-semibold">David Pavón</p>
          </div>
        </div>
        
        {/* Day selector */}
        <div className="flex gap-2 mt-4">
          {[1, 2, 3].map(day => (
            <button
              key={day}
              onClick={() => setCurrentDay(day)}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                currentDay === day 
                  ? 'bg-white text-gray-800' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Day Header */}
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-orange-500" />
          <h2 className="text-xl font-bold text-gray-800">Día {currentDay}</h2>
        </div>
      </div>

      {/* Exercises */}
      <div className="p-4 space-y-4">
        {currentWorkout.map((exercise, index) => {
          const repsArray = parseReps(exercise.reps);
          const uniqueReps = [...new Set(repsArray)];
          
          return (
            <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              {/* Exercise header */}
              <div className={`${getColorClasses(exercise.color)} p-3 text-white`}>
                <h3 className="font-semibold text-sm leading-tight">{exercise.name}</h3>
              </div>
              
              {/* Exercise details */}
              <div className="p-3 space-y-3">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>Series: {exercise.series}</span>
                  <span>Repeticiones: {exercise.reps}</span>
                </div>
                
                {/* Weight inputs */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Dumbbell className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">Pesos:</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {uniqueReps.map((reps, setIndex) => {
                      const key = getWeightKey(exercise.name, setIndex);
                      const isEditing = editingWeight === key;
                      const weight = getWeight(exercise.name, setIndex);
                      
                      return (
                        <div key={setIndex} className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 w-8">{reps} rep:</span>
                          {isEditing ? (
                            <div className="flex gap-1 flex-1">
                              <input
                                type="number"
                                value={tempWeight}
                                onChange={(e) => setTempWeight(e.target.value)}
                                className="w-14 px-1 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-transparent text-center"
                                placeholder="0"
                                maxLength="3"
                                max="999"
                                autoFocus
                              />
                              <button
                                onClick={handleSaveWeight}
                                className="px-2 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600"
                              >
                                ✓
                              </button>
                              <button
                                onClick={handleCancelEdit}
                                className="px-2 py-1 bg-gray-500 text-white text-xs rounded hover:bg-gray-600"
                              >
                                ✕
                              </button>
                            </div>
                          ) : (
                            <div className="flex items-center gap-1 flex-1">
                              <span className="text-sm font-medium">{weight} kg</span>
                              <button
                                onClick={() => handleEditWeight(exercise.name, setIndex)}
                                className="p-1 text-gray-400 hover:text-orange-500 transition-colors"
                              >
                                <Edit3 className="w-3 h-3" />
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkoutTracker;
