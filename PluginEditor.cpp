#include "PluginProcessor.h"
#include "PluginEditor.h"

AudioPluginAudioProcessorEditor::AudioPluginAudioProcessorEditor (AudioPluginAudioProcessor& p)
    : AudioProcessorEditor (&p), audioProcessor (p),
      unisonComp (audioProcessor.getValueTreeState()),
      spectrumComp(),
      arpeggiatorComp (audioProcessor.getValueTreeState())
{
    addAndMakeVisible (unisonComp);
    addAndMakeVisible (spectrumComp);
    addAndMakeVisible (arpeggiatorComp);
    setSize (800, 600);
}

AudioPluginAudioProcessorEditor::~AudioPluginAudioProcessorEditor()
{
}

void AudioPluginAudioProcessorEditor::paint (juce::Graphics& g)
{
    g.fillAll (getLookAndFeel().findColour (juce::ResizableWindow::backgroundColourId));
}

void AudioPluginAudioProcessorEditor::resized()
{
    auto area = getLocalBounds();
    unisonComp.setBounds (area.removeFromTop (200));
    spectrumComp.setBounds (area.removeFromTop (200));
    arpeggiatorComp.setBounds (area);
}
