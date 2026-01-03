
import React, { useState } from 'react';
import { CryptidStory } from '../types';

interface StoryFormProps {
  onSubmit: (story: CryptidStory) => void;
  onCancel: () => void;
}

const StoryForm: React.FC<StoryFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<CryptidStory>({
    witnessName: '',
    location: '',
    date: new Date().toISOString().split('T')[0],
    description: '',
  });
  const [file, setFile] = useState<File | undefined>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, file });
  };

  return (
    <div className="max-w-2xl mx-auto glass-panel p-8 border-t-2 border-t-emerald-500">
      <div className="mb-8 border-b border-emerald-500/20 pb-4">
        <h3 className="text-3xl font-command text-emerald-400">ENCOUNTER REPORT FORM</h3>
        <p className="text-[10px] uppercase text-emerald-700 tracking-[0.2em] mt-1 font-mono">Form Serial: CC-992-X</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold">Witness Name / Callsign</label>
            <input
              required
              name="witnessName"
              value={formData.witnessName}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-emerald-900/50 p-3 text-emerald-50 font-mono text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              placeholder="E.g. J. Doe"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold">Date of Encounter</label>
            <input
              required
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-emerald-900/50 p-3 text-emerald-50 font-mono text-sm focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold">Location / GPS Coordinates</label>
          <input
            required
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-emerald-900/50 p-3 text-emerald-50 font-mono text-sm focus:outline-none focus:border-emerald-500 transition-colors"
            placeholder="E.g. Woodsboro, WA (46.8523, -121.7603)"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold">Detailed Encounter Report</label>
          <textarea
            required
            rows={8}
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-emerald-900/50 p-4 text-emerald-50 font-mono text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none leading-relaxed"
            placeholder="Describe exactly what you saw. Include behaviors, physical traits, and atmospheric conditions..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold">Evidence Upload (Doc/Img/Vid)</label>
          <div className="relative group cursor-pointer border-2 border-dashed border-emerald-900/50 p-8 text-center hover:border-emerald-500 transition-all bg-emerald-500/5">
            <input 
              type="file" 
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <div className="space-y-2">
              <span className="text-2xl block">📁</span>
              <p className="text-xs text-emerald-600 uppercase tracking-widest font-bold">
                {file ? file.name : "Select or drag files here"}
              </p>
              <p className="text-[10px] text-emerald-800">Support for PDF, DOCX, JPG, MP4</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold py-3 uppercase tracking-[0.1em] text-sm transition-all"
          >
            Initiate Scanning
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-6 border border-red-900/50 text-red-700 hover:bg-red-500/10 font-bold py-3 uppercase tracking-[0.1em] text-sm transition-all"
          >
            Abort
          </button>
        </div>
      </form>
    </div>
  );
};

export default StoryForm;
