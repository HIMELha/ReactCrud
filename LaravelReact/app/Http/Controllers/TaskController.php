<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function tasks(){
        $tasks = Task::latest('id')->get();

        return response()->json([
            'tasks' => $tasks
        ]);
    }

    public function store(Request $request){
        Task::create([
            'name' =>  $request->name,
            'motivation' =>  $request->motivation,
            'description' =>  $request->description,
            'deadline' =>  $request->deadline,
            'status' =>  $request->status
        ]);
        return response()->json([
            'status' => true
        ]);
    }

    public function edit($id){
        $task = Task::where('id',$id)->first();
        if(!$task){
            return response()->json([
                'status' => false
            ]);
        }
        return response()->json([
            'task' => $task
        ]);
    }

    public function update(Request $request, $id){
        $task = Task::where('id',$id)->first();
        if(!$task){
            return response()->json([
                'status' => false
            ]);
        }

        $task->update([
            'name' => $request->name,
            'motivation' => $request->motivation,
            'description' => $request->description,
            'deadline' => $request->deadline,
            'status' => $request->status,
        ]);

        return response()->json([
            'status' => true
        ]);
    }

    public function delete($id){
        $task = Task::find($id);
        $task->delete();

        return response()->json([
            'status' => true
        ]);
    }
}
